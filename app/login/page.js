"use client";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  function submit(event) { event.preventDefault(); window.dispatchEvent(new CustomEvent("portfolio:navigate", { detail: "/dashboard" })); }
  return <main className="login-page"><Link href="/" className="brand login-brand">RB<span>.</span></Link><section className="login-panel"><div className="login-intro"><p className="eyebrow">Student workspace</p><h1>Welcome back.</h1><p>Sign in to explore the portfolio dashboard and project details.</p><div className="login-decoration">✦</div></div><form onSubmit={submit}><div className="form-heading"><h2>Log in</h2><p>Demo access — any details will work.</p></div><label htmlFor="email">Login ID or Email<input id="email" type="email" placeholder="rachel@email.com" required /></label><label htmlFor="password">Password<div className="password-field"><input id="password" type={showPassword ? "text" : "password"} placeholder="Enter your password" required /><button type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? "Hide" : "Show"}</button></div></label><button className="button button-primary login-submit" type="submit">Login <span>→</span></button><Link className="back-link" href="/">← Back to portfolio</Link></form></section></main>;
}
