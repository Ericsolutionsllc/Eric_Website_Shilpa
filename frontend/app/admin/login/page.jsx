// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import Image from "next/image";
// import {
//   FiMail,
//   FiLock,
//   FiEye,
//   FiEyeOff,
//   FiAlertCircle,
//   FiArrowRight,
// } from "react-icons/fi";
// import Link from "next/link";

// export default function AdminLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const router = useRouter();

//   const [step, setStep] = useState(1); // 1, 2, 3
//   const [otp, setOtp] = useState("");
//   const [tempToken, setTempToken] = useState("");
//   const [isFirstTime, setIsFirstTime] = useState(false);
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSendOTP = async () => {
//     setLoading(true);
//     setError("");
//     try {
//       const res = await axios.post(
//         `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/send-otp`,
//         { email },
//       );
//       setIsFirstTime(res.data.isFirstTime || false);
//       setStep(2);
//     } catch (err) {
//       setError(err.response?.data?.message || "Failed to send OTP");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleVerifyOTP = async () => {
//     setLoading(true);
//     setError("");
//     try {
//       const res = await axios.post(
//         `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/verify-otp`,
//         { email, otp },
//       );
//       setTempToken(res.data.tempToken);
//       setStep(3);
//     } catch (err) {
//       setError(err.response?.data?.message || "OTP verification failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleCompleteLogin = async () => {
//     setLoading(true);
//     setError("");
//     try {
//       const res = await axios.post(
//         `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/complete-login`,
//         { email, password, tempToken },
//       );
//       if (res.data.token) {
//         localStorage.setItem("adminToken", res.data.token);
//         router.push("/admin/dashboard");
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4">
//       <div className="w-full max-w-6xl flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transform transition-all duration-300 hover:shadow-2xl">
//         {/* Left Image Section */}
//         <div className="hidden md:block md:w-1/2 relative overflow-hidden">
//           {/* Image */}
//           <img
//             src="/login/admin.jpg"
//             alt="Admin Illustration"
//             className="h-[650px] w-full object-cover transform hover:scale-105 transition-transform duration-700"
//             width={600}
//             height={400}
//           />

//           {/* Gradient Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-b to-transparent z-10"></div>

//           {/* Top Content */}
//           {/* <div className="absolute top-4 left-8 right-8 z-20 text-blue-900">
//     <h2 className="text-3xl font-bold mb-2 tracking-wide">
//       Welcome to Admin Portal
//     </h2>
//   </div> */}
//         </div>

//         {/* Right Form Section */}
//         <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
//           {/* Decorative elements */}
//           <div className="absolute -top-10 -right-10 w-28 h-28 bg-blue-100 rounded-full opacity-20"></div>
//           <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-blue-200 rounded-full opacity-10"></div>

//           <div className="relative z-10">
//             <div className="flex justify-center">
//               <Link href="/" className="text-2xl font-semibold text-gray-800">
//                 <Image
//                   src="/subadmin/logo.gif"
//                   alt="logo"
//                   width={350}
//                   height={90}
//                   priority
//                 />
//               </Link>
//             </div>

//             <div className="text-center mb-10">
//               {/* <h2 className="text-3xl font-bold text-red-600 mb-3">
//                 Admin Login
//               </h2> */}
//               <p className="text-gray-500 text-lg">
//                 Enter your credentials to access the admin dashboard
//               </p>
//             </div>

//             {error && (
//               <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-start gap-3 transition-all duration-300 animate-fadeIn">
//                 <FiAlertCircle className="mt-0.5 flex-shrink-0 text-red-500" />
//                 <p className="text-sm">{error}</p>
//               </div>
//             )}

//             {step === 1 && (
//               <div className="space-y-6">
//                 <div className="space-y-2">
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Email Address
//                   </label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <FiMail className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <input
//                       id="email"
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       className="w-full pl-10 pr-4 py-3.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       placeholder="admin@example.com"
//                       required
//                       disabled={loading}
//                     />
//                   </div>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={handleSendOTP}
//                   disabled={loading || !email}
//                   className="w-full py-4 bg-[#e7810d] text-white rounded-lg text-base font-medium shadow-sm hover:shadow-md transition-all duration-300 disabled:opacity-80"
//                 >
//                   {loading ? "Sending OTP..." : "Send OTP"}
//                 </button>
//               </div>
//             )}

//             {step === 2 && (
//               <div className="space-y-6">
//                 <div className="text-center">
//                   <p className="text-gray-600">
//                     Enter the 6‑digit OTP sent to <strong>{email}</strong>
//                   </p>
//                 </div>
//                 <div className="space-y-2">
//                   <label
//                     htmlFor="otp"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     OTP Code
//                   </label>
//                   <input
//                     id="otp"
//                     type="text"
//                     value={otp}
//                     onChange={(e) =>
//                       setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
//                     }
//                     className="w-full px-4 py-3.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="123456"
//                     required
//                     maxLength={6}
//                   />
//                 </div>
//                 <button
//                   type="button"
//                   onClick={handleVerifyOTP}
//                   disabled={loading || otp.length !== 6}
//                   className="w-full py-4 bg-[#e7810d] text-white rounded-lg text-base font-medium shadow-sm hover:shadow-md transition-all duration-300 disabled:opacity-80"
//                 >
//                   {loading ? "Verifying..." : "Verify OTP"}
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setStep(1)}
//                   className="w-full text-sm text-blue-600 hover:underline"
//                 >
//                   ← Change email
//                 </button>
//               </div>
//             )}

//             {step === 3 && (
//               <div className="space-y-6">
//                 <div className="text-center">
//                   <p className="text-gray-600">
//                     {isFirstTime
//                       ? "Create a new password"
//                       : "Enter your password"}
//                   </p>
//                 </div>
//                 <div className="space-y-2">
//                   <label
//                     htmlFor="password"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Password
//                   </label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <FiLock className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       className="w-full pl-10 pr-12 py-3.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       placeholder="Enter your password"
//                       required
//                     />
//                     <button
//                       type="button"
//                       className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                       onClick={() => setShowPassword(!showPassword)}
//                     >
//                       {showPassword ? (
//                         <FiEyeOff className="h-5 w-5 text-gray-400" />
//                       ) : (
//                         <FiEye className="h-5 w-5 text-gray-400" />
//                       )}
//                     </button>
//                   </div>
//                 </div>
//                 {isFirstTime && (
//                   <div className="space-y-2">
//                     <label
//                       htmlFor="confirmPassword"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Confirm Password
//                     </label>
//                     <input
//                       id="confirmPassword"
//                       type={showPassword ? "text" : "password"}
//                       value={confirmPassword}
//                       onChange={(e) => setConfirmPassword(e.target.value)}
//                       className="w-full px-4 py-3.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       placeholder="Confirm your password"
//                       required
//                     />
//                   </div>
//                 )}
//                 <button
//                   type="button"
//                   onClick={handleCompleteLogin}
//                   disabled={
//                     loading ||
//                     !password ||
//                     (isFirstTime && password !== confirmPassword)
//                   }
//                   className="w-full py-4 bg-[#e7810d] text-white rounded-lg text-base font-medium shadow-sm hover:shadow-md transition-all duration-300 disabled:opacity-80 flex items-center justify-center"
//                 >
//                   {loading
//                     ? "Logging in..."
//                     : isFirstTime
//                       ? "Create Admin & Login"
//                       : "Login"}
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setStep(2)}
//                   className="w-full text-sm text-blue-600 hover:underline"
//                 >
//                   ← Back to OTP
//                 </button>
//               </div>
//             )}

//             <div className="mt-10 pt-6 border-t border-gray-100 text-center text-sm text-gray-500">
//               <p>
//                 © {new Date().getFullYear()} eRIC SOLUTIONS. All rights reserved.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx global>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.3s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// }























// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import Image from "next/image";
// import {
//   FiMail,
//   FiLock,
//   FiEye,
//   FiEyeOff,
//   FiAlertCircle,
// } from "react-icons/fi";
// import Link from "next/link";

// export default function AdminLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const router = useRouter();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     try {
//       const res = await axios.post(
//         `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/login`,
//         { email, password }
//       );
//       if (res.data.token) {
//         localStorage.setItem("adminToken", res.data.token);
//         router.push("/admin/dashboard");
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4">
//       <div className="w-full max-w-6xl flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transform transition-all duration-300 hover:shadow-2xl">
//         {/* Left Image Section */}
//         <div className="hidden md:block md:w-1/2 relative overflow-hidden">
//           <img
//             src="/login/admin.jpg"
//             alt="Admin Illustration"
//             className=" h-full w-full object-cover"
           
//           />
//         </div>

//         {/* Right Form Section */}
//         <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
//           {/* Decorative elements */}
//           <div className="absolute -top-10 -right-10 w-28 h-28 bg-blue-100 rounded-full opacity-20"></div>
//           <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-blue-200 rounded-full opacity-10"></div>

//           <div className="relative z-10">
//             <div className="flex justify-center">
//               <Link href="/" className="text-2xl font-semibold text-gray-800">
//                 <Image
//                   src="/subadmin/logo.gif"
//                   alt="logo"
//                   width={350}
//                   height={90}
//                   priority
//                 />
//               </Link>
//             </div>

//             <div className="text-center mb-10">
//               <p className="text-gray-500 text-lg">
//                 Enter your credentials to access the admin dashboard
//               </p>
//             </div>

//             {error && (
//               <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-start gap-3 transition-all duration-300 animate-fadeIn">
//                 <FiAlertCircle className="mt-0.5 flex-shrink-0 text-red-500" />
//                 <p className="text-sm">{error}</p>
//               </div>
//             )}

//             <form onSubmit={handleLogin} className="space-y-6">
//               <div className="space-y-2">
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Email Address
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FiMail className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     id="email"
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="w-full pl-10 pr-4 py-3.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="admin@example.com"
//                     required
//                     disabled={loading}
//                   />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Password
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FiLock className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     id="password"
//                     type={showPassword ? "text" : "password"}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="w-full pl-10 pr-12 py-3.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="Enter your password"
//                     required
//                     disabled={loading}
//                   />
//                   <button
//                     type="button"
//                     className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? (
//                       <FiEyeOff className="h-5 w-5 text-gray-400" />
//                     ) : (
//                       <FiEye className="h-5 w-5 text-gray-400" />
//                     )}
//                   </button>
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading || !email || !password}
//                 className="w-full py-4 bg-[#e7810d] text-white rounded-lg text-base font-medium shadow-sm hover:shadow-md transition-all duration-300 disabled:opacity-80 flex items-center justify-center"
//               >
//                 {loading ? "Logging in..." : "Login"}
//               </button>
//             </form>

//             <div className="mt-10 pt-6 border-t border-gray-100 text-center text-sm text-gray-500">
//               <p>
//                 © {new Date().getFullYear()} eRIC SOLUTIONS. All rights reserved.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx global>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.3s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// }














"use client";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiAlertCircle,
  FiArrowLeft,
} from "react-icons/fi";
import Link from "next/link";

export default function AdminLogin() {
  const router = useRouter();

  // Login state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Forgot password state
  const [forgotMode, setForgotMode] = useState(false);
  const [forgotStep, setForgotStep] = useState(1); // 1: email, 2: new password
  const [forgotEmail, setForgotEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [forgotLoading, setForgotLoading] = useState(false);
  const [forgotError, setForgotError] = useState("");
  const [forgotSuccess, setForgotSuccess] = useState("");

 
const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError("");
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/login`,
      { email, password }
    );
    
    if (res.data.token) {
      // Decode the token to get payload
      const decoded = jwtDecode(res.data.token);
      console.log("Decoded token:", decoded);

      // Check the userType (role)
      const userType = decoded.userType; // "admin" in your case

      // You can also store the entire decoded object or just the role
      localStorage.setItem("adminToken", res.data.token);
      localStorage.setItem("userRole", userType); // optional

      console.log(res.data.token);
      console.log(userType);


      // Redirect based on role
      if (userType === "admin") {
        router.push("/admin/dashboard");
      } else if (userType === "superadmin") {
        router.push("/superadmin/dashboard");
      } else {
        // fallback
        router.push("/dashboard");
      }
    }
  } catch (err) {
    setError(err.response?.data?.message || "Login failed");
  } finally {
    setLoading(false);
  }
};

  // --- Forgot password: verify email ---
  const handleVerifyEmail = async (e) => {
    e.preventDefault();
    setForgotLoading(true);
    setForgotError("");
    setForgotSuccess("");
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/forgot-password/verify-email`,
        { email: forgotEmail }
      );
      setForgotStep(2);
    } catch (err) {
      setForgotError(err.response?.data?.message || "Email verification failed");
    } finally {
      setForgotLoading(false);
    }
  };

  // --- Forgot password: reset ---
  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      setForgotError("Passwords do not match");
      return;
    }
    setForgotLoading(true);
    setForgotError("");
    setForgotSuccess("");
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/forgot-password/reset`,
        { email: forgotEmail, newPassword }
      );
      setForgotSuccess("Password updated successfully! Redirecting to login...");
      setTimeout(() => {
        setForgotMode(false);
        setForgotStep(1);
        setForgotEmail("");
        setNewPassword("");
        setConfirmNewPassword("");
        setForgotSuccess("");
      }, 2000);
    } catch (err) {
      setForgotError(err.response?.data?.message || "Password reset failed");
    } finally {
      setForgotLoading(false);
    }
  };

  // --- Reset forgot state when closing ---
  const handleBackToLogin = () => {
    setForgotMode(false);
    setForgotStep(1);
    setForgotEmail("");
    setNewPassword("");
    setConfirmNewPassword("");
    setForgotError("");
    setForgotSuccess("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="w-full max-w-6xl flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transform transition-all duration-300 hover:shadow-2xl">
        {/* Left Image Section */}
        <div className="hidden md:block md:w-1/2 relative overflow-hidden">
          <img
            src="/login/admin.jpg"
            alt="Admin Illustration"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
          <div className="absolute -top-10 -right-10 w-28 h-28 bg-blue-100 rounded-full opacity-20"></div>
          <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-blue-200 rounded-full opacity-10"></div>

          <div className="relative z-10">
            <div className="flex justify-center">
              <Link href="/" className="text-2xl font-semibold text-gray-800">
                <Image
                  src="/subadmin/logo.gif"
                  alt="logo"
                  width={350}
                  height={90}
                  priority
                />
              </Link>
            </div>

            <div className="text-center mb-10">
              <p className="text-gray-500 text-lg">
                {forgotMode
                  ? "Reset your password"
                  : "Enter your credentials to access the admin dashboard"}
              </p>
            </div>

            {/* Error / Success Messages */}
            {(error || forgotError || forgotSuccess) && (
              <div
                className={`mb-6 p-4 rounded-lg flex items-start gap-3 transition-all duration-300 animate-fadeIn ${
                  forgotSuccess
                    ? "bg-green-50 border border-green-200 text-green-700"
                    : "bg-red-50 border border-red-200 text-red-700"
                }`}
              >
                <FiAlertCircle className="mt-0.5 flex-shrink-0" />
                <p className="text-sm">
                  {error || forgotError || forgotSuccess}
                </p>
              </div>
            )}

            {/* Login Form */}
            {!forgotMode && (
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="admin@example.com"
                      required
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiLock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-12 py-3.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your password"
                      required
                      disabled={loading}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FiEyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <FiEye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading || !email || !password}
                  className="w-full py-4 bg-[#e7810d] text-white rounded-lg text-base font-medium shadow-sm hover:shadow-md transition-all duration-300 disabled:opacity-80 flex items-center justify-center"
                >
                  {loading ? "Logging in..." : "Login"}
                </button>

                {/* Forgot Password Link - centered bottom */}
                <div className="text-center mt-4">
                  <button
                    type="button"
                    onClick={() => setForgotMode(true)}
                    className="text-sm text-blue-600 hover:underline focus:outline-none"
                  >
                    Forgot Password?
                  </button>
                </div>
              </form>
            )}

            {/* Forgot Password Forms */}
            {forgotMode && (
              <div className="space-y-6">
                {forgotStep === 1 && (
                  <form onSubmit={handleVerifyEmail} className="space-y-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="forgotEmail"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Enter your admin email
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiMail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="forgotEmail"
                          type="email"
                          value={forgotEmail}
                          onChange={(e) => setForgotEmail(e.target.value)}
                          className="w-full pl-10 pr-4 py-3.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="admin@example.com"
                          required
                          disabled={forgotLoading}
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={forgotLoading || !forgotEmail}
                      className="w-full py-4 bg-[#e7810d] text-white rounded-lg text-base font-medium shadow-sm hover:shadow-md transition-all duration-300 disabled:opacity-80"
                    >
                      {forgotLoading ? "Verifying..." : "Verify Email"}
                    </button>
                  </form>
                )}

                {forgotStep === 2 && (
                  <form onSubmit={handleResetPassword} className="space-y-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="newPassword"
                        className="block text-sm font-medium text-gray-700"
                      >
                        New Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiLock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="newPassword"
                          type={showNewPassword ? "text" : "password"}
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          className="w-full pl-10 pr-12 py-3.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter new password"
                          required
                          disabled={forgotLoading}
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                        >
                          {showNewPassword ? (
                            <FiEyeOff className="h-5 w-5 text-gray-400" />
                          ) : (
                            <FiEye className="h-5 w-5 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="confirmNewPassword"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Confirm New Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiLock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="confirmNewPassword"
                          type={showNewPassword ? "text" : "password"}
                          value={confirmNewPassword}
                          onChange={(e) => setConfirmNewPassword(e.target.value)}
                          className="w-full pl-10 pr-4 py-3.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Confirm new password"
                          required
                          disabled={forgotLoading}
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={
                        forgotLoading ||
                        !newPassword ||
                        !confirmNewPassword ||
                        newPassword !== confirmNewPassword
                      }
                      className="w-full py-4 bg-[#e7810d] text-white rounded-lg text-base font-medium shadow-sm hover:shadow-md transition-all duration-300 disabled:opacity-80"
                    >
                      {forgotLoading ? "Resetting..." : "Reset Password"}
                    </button>
                  </form>
                )}

                {/* Back to Login Link */}
                <div className="text-center mt-4">
                  <button
                    type="button"
                    onClick={handleBackToLogin}
                    className="text-sm text-blue-600 hover:underline flex items-center justify-center gap-1 focus:outline-none"
                  >
                    <FiArrowLeft className="inline" />
                    Back to Login
                  </button>
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="mt-10 pt-6 border-t border-gray-100 text-center text-sm text-gray-500">
              <p>
                © {new Date().getFullYear()} eRIC SOLUTIONS. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}