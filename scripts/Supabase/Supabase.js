import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://your-project.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2bm92YnViZWFqb2t6aWduYWJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE3Mzc0MzcsImV4cCI6MjAzNzMxMzQzN30.zv5JXOAoTR6ivRcycWx6eOtV7uLLqIuxjQZX9jjMwvM';
const supabase = createClient(supabaseUrl, supabaseKey);