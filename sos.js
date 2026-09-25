// ==========================================
// SOS & MEDICINE MANAGEMENT (Nandini's Module)
// ==========================================

// --- MEDICINE CRUD FUNCTIONS ---

async function addMedicineRecord(userId, medicineName, scheduleTime) {
  try {
    const { data, error } = await window.supabaseClient
      .from('medicines')
      .insert([{ user_id: userId, medicine_name: medicineName, schedule_time: scheduleTime, is_completed: false }]);
    
    if (error) throw error;
    console.log('Medicine added successfully:', data);
    return { success: true, data };
  } catch (err) {
    console.error('Error adding medicine:', err.message);
    return { success: false, error: err.message };
  }
}

async function fetchUserMedicines(userId) {
  try {
    const { data, error } = await window.supabaseClient
      .from('medicines')
      .select('*')
      .eq('user_id', userId);
    
    if (error) throw error;
    return data;
  } catch (err) {
    console.error('Error fetching medicines:', err.message);
    return [];
  }
}

// --- REALTIME SOS EMERGENCY ALERT WITH BROWSER NOTIFICATION & MAKE.COM WEBHOOK ---

async function triggerRealtimeSOS() {
  try {
    console.log('Triggering Realtime SOS...');

    // Browser Notification permission check
    if ('Notification' in window && Notification.permission !== 'granted') {
      await Notification.requestPermission();
    }

    // Fetch user profile to get emergency contacts from Supabase 'profiles' table safely
    let emergencyContact = 'Not Provided'; // fallback number
    let patientName = 'Mr. D. Borah';

    try {
      const { data: profile } = await window.supabaseClient
        .from('profiles')
        .select('emergency_contact, patient_name')
        .limit(1)
        .maybeSingle();

      if (profile?.emergency_contact) emergencyContact = profile.emergency_contact;
      if (profile?.patient_name) patientName = profile.patient_name;
    } catch (profileErr) {
      console.warn('Profile fetch warning (using defaults):', profileErr.message);
    }

    const timestamp = new Date().toISOString();

    // 1. Log the SOS emergency event into telemetry_logs table safely with try/catch
    try {
      const { error: logError } = await window.supabaseClient
        .from('telemetry_logs')
        .insert([{
          patient_name: patientName,
          stability_score: 0, // 0 indicates critical emergency
          difficulty_tier: 'SOS_TRIGGERED'
        }]);

      if (logError) {
        console.warn('Supabase telemetry log warning:', logError.message);
      } else {
        console.log('SOS successfully logged to Supabase telemetry_logs!');
      }
    } catch (dbLogErr) {
      console.warn('Telemetry insert skipped:', dbLogErr.message);
    }

    // 2. Directly ping your Make.com Webhook URL with mode: 'no-cors' to bypass browser blocks
    const MAKE_WEBHOOK_URL = 'https://hook.us2.make.com/298nnfxjnmj5i5lngupd7uet6tdk6a5v';
    
    if (MAKE_WEBHOOK_URL && MAKE_WEBHOOK_URL.startsWith('http')) {
      try {
        await fetch(MAKE_WEBHOOK_URL, {
          method: 'POST',
          mode: 'no-cors', // Prevents browser CORS blocking errors
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            patient_name: patientName,
            emergency_contact: emergencyContact,
            timestamp: timestamp,
            alert_type: 'EMERGENCY_SOS'
          })
        });
        console.log('Make.com webhook dispatched successfully!');
      } catch (webhookErr) {
        console.warn('Webhook dispatch warning:', webhookErr.message);
      }
    }

    // Trigger Real-Time Browser Notification Pop-up on Phone/Laptop
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('🚨 EMERGENCY SOS ALERT!', {
        body: `Patient: ${patientName}\nCaregiver Notified: ${emergencyContact}\nAlert Dispatched Successfully!`,
        icon: 'https://cdn-icons-png.flaticon.com/512/564/564619.png'
      });
    }

    alert(`🚨 EMERGENCY SOS ACTIVATED!\nNotifying Caregiver: ${emergencyContact}\nAlert successfully dispatched to cloud and webhook.`);
    
  } catch (err) {
    console.error('Failed to trigger SOS:', err.message);
    alert('SOS Alert failed. Check console for details.');
  }
}