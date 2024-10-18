import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"sm": "640px",
				"md": "768px",
				"lg": "1024px",
				"xl": "1280px",
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				pcolor: "#00040e",
				scolor: "#0c99e4",
				dark: "#001f3f",
				light: "#4db8ff",
				white: {
					"1": "#FFFFFF",
					"2": "rgba(255, 255, 255, 0.72)",
					"3": "rgba(255, 255, 255, 0.4)",
					"4": "rgba(255, 255, 255, 0.64)",
					"5": "rgba(255, 255, 255, 0.80)",
				},
				black: {
					"1": "#15171C",
					"2": "#222429",
					"3": "#101114",
					"4": "#252525",
					"5": "#2E3036",
					"6": "#24272C",
				},
				orange: {
					"1": "#F97535",
				},
				blue: {
					"1": "#2196F3",
				},
				gray: {
					"1": "#71788B",
				},
			},
			fontFamily: {
				body: [
					"Inter",
					"ui-sans-serif",
					"system-ui",
					"-apple-system",
					"system-ui",
					"Segoe UI",
					"Roboto",
					"Helvetica Neue",
					"Arial",
					"Noto Sans",
					"sans-serif",
					"Apple Color Emoji",
					"Segoe UI Emoji",
					"Segoe UI Symbol",
					"Noto Color Emoji",
				],
				sans: [
					"Inter",
					"ui-sans-serif",
					"system-ui",
					"-apple-system",
					"system-ui",
					"Segoe UI",
					"Roboto",
					"Helvetica Neue",
					"Arial",
					"Noto Sans",
					"sans-serif",
					"Apple Color Emoji",
					"Segoe UI Emoji",
					"Segoe UI Symbol",
					"Noto Color Emoji",
				],
			},
			backgroundImage: {
				"nav-focus": "linear-gradient(270deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				marquee: {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(calc(-100% - var(--gap)))" },
				},
				"marquee-vertical": {
					from: { transform: "translateY(0)" },
					to: { transform: "translateY(calc(-100% - var(--gap)))" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				marquee: "marquee var(--duration) infinite linear",
				"marquee-vertical": "marquee-vertical var(--duration) linear infinite",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};

export default config;