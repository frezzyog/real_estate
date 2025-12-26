
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kmbiwumqnrvkqrmcmxed.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttYml3dW1xbnJ2a3FybWNteGVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY3NDUzMDgsImV4cCI6MjA4MjMyMTMwOH0._C4sREBil6aZhCGWDVBrFKnup-ySE7LRQySb-UBQ170';

export const supabase = createClient(supabaseUrl, supabaseKey);
