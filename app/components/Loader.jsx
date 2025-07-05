"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Loader() {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => setLoading(true);
    const stop = () => setLoading(false);

    const handleRouteChangeStart = () => start();
    const handleRouteChangeComplete = () => stop();

    router.prefetch?.(pathname);

    // Add global loading state
    router.events?.on?.("routeChangeStart", handleRouteChangeStart);
    router.events?.on?.("routeChangeComplete", handleRouteChangeComplete);
    router.events?.on?.("routeChangeError", handleRouteChangeComplete);

    return () => {
      router.events?.off?.("routeChangeStart", handleRouteChangeStart);
      router.events?.off?.("routeChangeComplete", handleRouteChangeComplete);
      router.events?.off?.("routeChangeError", handleRouteChangeComplete);
    };
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-[100]">
      <motion.div
        className="w-14 h-14 border-4 border-white border-t-blue-500 rounded-full animate-spin"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}
