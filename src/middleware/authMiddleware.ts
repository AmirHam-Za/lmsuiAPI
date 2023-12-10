import User from "@/types/User";

export default function auth(to: any, from: any, next: any) { 
  
  const user = JSON.parse(window.localStorage.getItem('user') || '{}') as User;
  const token = user.token
  
  if (!token) {
    return next('/login');
  }

  next();
}