import { createClient } from "@supabase/supabase-js";
import { w as writable } from "./index2.js";
const PUBLIC_SUPABASE_URL = "https://durlkvcnotanvkjmeboc.supabase.co";
const PUBLIC_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1cmxrdmNub3RhbnZram1lYm9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM5MTEyMjksImV4cCI6MjAxOTQ4NzIyOX0.H1act1dW3xwfrpfAv39Z1G-861qqD3sfhWrLhxC-72g";
const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);
const userStore = writable();
supabase.auth.getSession().then(({ data }) => {
  userStore.set(data.session?.user);
});
supabase.auth.onAuthStateChange((event, session) => {
  if (event == "SIGNED_IN" && session) {
    userStore.set(session.user);
  } else if (event == "SIGNED_OUT") {
    userStore.set(null);
  }
});
const authLogin = {
  get user() {
    return userStore;
  },
  signIn(email, password) {
    return supabase.auth.signInWithPassword({ email, password });
  },
  signOut() {
    return supabase.auth.signOut();
  }
};
export {
  authLogin as a
};
