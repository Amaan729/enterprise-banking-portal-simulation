import { Routes, Route, Navigate } from 'react-router-dom';
 import React from 'react';
 import Login        from './components/Login';
 // …

 function App() {
   return (
-    <AuthProvider>
-      <Router>
-        <Navbar />
-        <Routes>
+    <AuthProvider>
+      <>
+        <Navbar />
+        <Routes>
           <Route path="/" element={<Navigate to="/accounts" />} />
           <Route path="/login" element={<Login />} />
           <Route path="/register" element={<Register />} />
@@ -22,7 +21,6 @@ function App() {
           <Route path="/transactions/:accountId" element={
             <RequireAuth><Transactions /></RequireAuth>} />
         </Routes>
-      </Router>
     </AuthProvider>
   );
 }

 export default App;