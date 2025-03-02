
import type { Config } from "tailwindcss";

export default {
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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
        finance: {
          'blue': '#3a86ff',
          'green': '#38b000',
          'red': '#d00000',
          'yellow': '#ffbe0b',
          'purple': '#5e60ce',
          'light-blue': '#90e0ef',
          'dark-blue': '#0077b6',
          'gray': '#f8f9fa',
          'text': '#2b2d42',
          'neon-blue': '#42b6ff',
          'neon-pink': '#ff5f9e',
          'neon-green': '#39ff14',
          'neon-orange': '#ff9e00',
          'neon-purple': '#b14aed',
          'neon-cyan': '#0fefd9',
          'eclipse-bg': '#121212',
          'eclipse-card': '#1e1e2e',
          'eclipse-card-light': '#2d2d3d',
          'eclipse-text': '#e0e0f0'
        }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'slide-in': {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' }
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        'glow': {
          '0%, 100%': { 
            'box-shadow': '0 0 5px rgba(66, 182, 255, 0.5), 0 0 10px rgba(66, 182, 255, 0.3)'
          },
          '50%': { 
            'box-shadow': '0 0 15px rgba(66, 182, 255, 0.8), 0 0 20px rgba(66, 182, 255, 0.5)'
          }
        },
        'circle-rotation': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-in': 'slide-in 0.4s ease-out',
        'pulse-soft': 'pulse-soft 2s infinite ease-in-out',
        'scale-in': 'scale-in 0.3s ease-out',
        'glow': 'glow 2s infinite ease-in-out',
        'circle-rotation': 'circle-rotation 8s linear infinite'
			},
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(to right bottom, rgba(20, 20, 30, 0.9), rgba(30, 30, 45, 0.7))',
        'eclipse-gradient': 'linear-gradient(120deg, #121212 0%, #1e1e2e 100%)',
        'neon-circle': 'conic-gradient(#42b6ff 0deg, #0fefd9 60deg, #39ff14 120deg, #ff9e00 180deg, #ff5f9e 240deg, #b14aed 300deg, #42b6ff 360deg)'
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.2)',
        'card': '0 10px 30px rgba(0, 0, 0, 0.15)',
        'highlight': '0 0 15px rgba(66, 182, 255, 0.4)',
        'neon': '0 0 10px rgba(66, 182, 255, 0.5), 0 0 20px rgba(66, 182, 255, 0.3)'
      }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
