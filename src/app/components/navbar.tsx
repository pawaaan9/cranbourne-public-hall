"use client";
import React, { useState } from "react";

const navItems = [
	"Home",
	"Facilities",
	"Availability",
	"Testimonials",
	"Contact",
];

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header style={{ width: "100%", position: "relative", zIndex: 100 }}>
			<nav
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					background: "#fff",
					borderRadius: "2rem",
					boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
					padding: "0.75rem 2rem",
					margin: "2rem auto",
					maxWidth: "900px",
					width: "90%",
				}}
			>
				{/* Logo or Title */}
				<div style={{ fontWeight: 700, fontSize: "1.25rem", color: "#222" }}>Public Hall</div>

				{/* Desktop Nav */}
				<div className="navbar-desktop" style={{ display: "flex", gap: "1.5rem" }}>
					{navItems.map((item) => (
						<button
							key={item}
							style={{
								background: "none",
								border: "none",
								fontSize: "1rem",
								fontWeight: 500,
								color: "#222",
								padding: "0.5rem 1rem",
								borderRadius: "1rem",
								cursor: "pointer",
								transition: "background 0.2s",
							}}
							onMouseOver={e => (e.currentTarget.style.background = "#f3f3f3")}
							onMouseOut={e => (e.currentTarget.style.background = "none")}
						>
							{item}
						</button>
					))}
				</div>
				<button
					className="navbar-desktop"
					style={{
						background: "#e63946",
						color: "#fff",
						border: "none",
						fontWeight: 600,
						fontSize: "1rem",
						padding: "0.5rem 1.5rem",
						borderRadius: "1.5rem",
						cursor: "pointer",
						boxShadow: "0 2px 8px rgba(230,57,70,0.08)",
						transition: "background 0.2s",
					}}
					onMouseOver={e => (e.currentTarget.style.background = "#d62839")}
					onMouseOut={e => (e.currentTarget.style.background = "#e63946")}
				>
					Book Now
				</button>

				{/* Hamburger for mobile */}
				<button
					className="navbar-mobile"
					style={{
						background: "none",
						border: "none",
						display: "none",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						cursor: "pointer",
						width: "40px",
						height: "40px",
						padding: 0,
					}}
					onClick={() => setMenuOpen(!menuOpen)}
				>
					<span style={{ width: "28px", height: "4px", background: "#222", borderRadius: "2px", margin: "4px 0" }}></span>
					<span style={{ width: "28px", height: "4px", background: "#222", borderRadius: "2px", margin: "4px 0" }}></span>
					<span style={{ width: "28px", height: "4px", background: "#222", borderRadius: "2px", margin: "4px 0" }}></span>
				</button>
			</nav>

			{/* Side Menu for Mobile */}
			{menuOpen && (
				<div
					style={{
						position: "fixed",
						top: 0,
						right: 0,
						width: "70vw",
						maxWidth: "320px",
						height: "100vh",
						background: "#fff",
						boxShadow: "-2px 0 16px rgba(0,0,0,0.12)",
						zIndex: 999,
						display: "flex",
						flexDirection: "column",
						padding: "2rem 1.5rem",
						gap: "1.5rem",
						animation: "slideIn 0.2s",
					}}
				>
					<button
						style={{
							alignSelf: "flex-end",
							background: "none",
							border: "none",
							fontSize: "2rem",
							cursor: "pointer",
							marginBottom: "1rem",
						}}
						onClick={() => setMenuOpen(false)}
						aria-label="Close menu"
					>
						&times;
					</button>
					{navItems.map((item) => (
						<button
							key={item}
							style={{
								background: "none",
								border: "none",
								fontSize: "1.2rem",
								fontWeight: 500,
								color: "#222",
								padding: "0.75rem 1rem",
								borderRadius: "1rem",
								cursor: "pointer",
								textAlign: "left",
								transition: "background 0.2s",
							}}
							onClick={() => setMenuOpen(false)}
						>
							{item}
						</button>
					))}
					<button
						style={{
							background: "#e63946",
							color: "#fff",
							border: "none",
							fontWeight: 600,
							fontSize: "1.2rem",
							padding: "0.75rem 1.5rem",
							borderRadius: "1.5rem",
							cursor: "pointer",
							boxShadow: "0 2px 8px rgba(230,57,70,0.08)",
							transition: "background 0.2s",
						}}
						onClick={() => setMenuOpen(false)}
					>
						Book Now
					</button>
				</div>
			)}

			<style>{`
				@media (max-width: 700px) {
					.navbar-desktop {
						display: none !important;
					}
					.navbar-mobile {
						display: flex !important;
					}
				}
				@keyframes slideIn {
					from { right: -320px; opacity: 0; }
					to { right: 0; opacity: 1; }
				}
			`}</style>
		</header>
	);
};

export default Navbar;
