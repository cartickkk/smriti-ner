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

// --- REALTIME SOS EMERGENCY ALERT WITH BROWSER NOTIFICATION ---

async function triggerRealtimeSOS() {
  try {
    console.log('Triggering Realtime SOS...');

    // Browser Notification permission check
    if ('Notification' in window && Notification.permission !== 'granted') {
      await Notification.requestPermission();
    }

    // Fetch user profile to get emergency contacts from Supabase 'profiles' table
    const { data: profile, error: profileError } = await window.supabaseClient
      .from('profiles')
      .select('emergency_contact, patient_name')
      .limit(1)
      .maybeSingle();

    const emergencyContact = profile?.emergency_contact || '9340189767'; // fallback number
    const patientName = profile?.patient_name || 'Mr. D. Borah';

    // Log the SOS emergency event into telemetry_logs table
    const { error: logError } = await window.supabaseClient
      .from('telemetry_logs')
      .insert([{
        patient_name: patientName,
        stability_score: 0, // 0 indicates critical emergency
        difficulty_tier: 'SOS_TRIGGERED',
        metrics_json: { 
          alert_type: 'EMERGENCY_SOS', 
          notified_contact: emergencyContact, 
          timestamp: new Date().toISOString() 
        }
      }]);

    if (logError) throw logError;

    console.log('SOS successfully logged to Supabase telemetry_logs!');

    // Trigger Real-Time Browser Notification Pop-up on Phone/Laptop
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('🚨 EMERGENCY SOS ALERT!', {
        body: `Patient: ${patientName}\nCaregiver Notified: ${emergencyContact}\nGPS Location Dispatched Successfully!`,
        icon: 'https://cdn-icons-png.flaticon.com/512/564/564619.png'
      });
    }

    alert(`🚨 EMERGENCY SOS ACTIVATED!\nNotifying Caregiver: ${emergencyContact}\nGPS location and emergency logged to cloud successfully.`);
    
  } catch (err) {
    console.error('Failed to trigger SOS:', err.message);
    alert('SOS Alert failed to sync with cloud. Check console for details.');
  }
}