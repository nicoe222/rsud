"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

// source code
// https://www.npmjs.com/package/next-themes#avoid-hydration-mismatch
export const DarkModeBtn = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme, systemTheme } = useTheme();

	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}
	const currentTheme = theme === "system" ? systemTheme : theme;

	return (
		<div>
			{currentTheme === "dark" ? (
				<BsFillSunFill
					className="h-4 w-4 cursor-pointer text-yellow-500"
					onClick={() => setTheme("light")}
				/>
			) : (
				<BsFillSunFill
					className="h-4 w-4 cursor-pointer text-black"
					onClick={() => setTheme("dark")}
				/>
			)}
		</div>
	);
};