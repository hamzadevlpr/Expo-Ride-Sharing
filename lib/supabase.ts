import { createClient } from '@supabase/supabase-js'
import * as SecureStore from 'expo-secure-store'
import 'react-native-url-polyfill/auto'

// Replace with your project values from Supabase Dashboard
const SUPABASE_URL = 'https://hobiweliwzawxxdtblwy.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvYml3ZWxpd3phd3h4ZHRibHd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4NTc5OTgsImV4cCI6MjA3MTQzMzk5OH0.AG5Xk2XSxolmjMLyqZHSq4_z3unOu8Bo5wlaPgvEWY8'

const ExpoSecureStoreAdapter = {
  getItem: (key: string) => SecureStore.getItemAsync(key),
  setItem: (key: string, value: string) => SecureStore.setItemAsync(key, value),
  removeItem: (key: string) => SecureStore.deleteItemAsync(key),
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: ExpoSecureStoreAdapter,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})
