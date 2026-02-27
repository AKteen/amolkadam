import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vdezqcvygmtlwlncghle.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkZXpxY3Z5Z210bHdsbmNnaGxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIyMDE1NzQsImV4cCI6MjA4Nzc3NzU3NH0.OcsSe1DXNpd0QSCfqCT8ESOJ9MHf6GQ1-dZ8ZtLpoIE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);