import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    id: 'student-123',
    role: 'student',
    unlockedLabs: ['cardiac-basic', 'dna-intro'],
    progress: {
      'cardiac-basic': { score: 82, attempts: 3 },
      'dna-intro': { score: 91, attempts: 1 }
    }
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}