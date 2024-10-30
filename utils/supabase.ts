//following instructions found here: https://docs.expo.dev/guides/using-supabase/
import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sslrdjgivcwmnhnpbsma.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzbHJkamdpdmN3bW5obnBic21hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAzMjM2MTYsImV4cCI6MjA0NTg5OTYxNn0.7-FH93-tnMNb7XBeer4NbmW3GpJZUlcdagQNvzsZ1qU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

//Now you can import { supabase } from '/utils/supabase' throughout your application to leverage the full power of Supabase!