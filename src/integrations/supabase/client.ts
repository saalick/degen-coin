// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://dtogujvkbzlmstvcodut.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0b2d1anZrYnpsbXN0dmNvZHV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5NTIzMDYsImV4cCI6MjA2NjUyODMwNn0.GfLsfxmG9yG04h5F1w1bnF7a3cDBuiIQOmYuTpIsbhI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);