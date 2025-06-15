"use client";

import type React from "react";

import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import Link from "next/link";
import { Label } from "@radix-ui/react-label";
import { Button } from "@project/common/ui/button";
import { Input } from "@project/common/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@project/common/ui/card";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { email, password });
  };

  return (
    <Card className="w-full max-w-md bg-[#14090F] border-gray-700">
      <CardHeader className="text-center space-y-4">
        <div className="mx-auto w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center">
          <div className="w-10 h-10 bg-pink-400 rounded-full border-4 border-pink-600"></div>
        </div>
        <CardTitle className="text-2xl font-bold text-white">
          Team Login
        </CardTitle>
        <CardDescription className="text-gray-400">
          Access your team's dashboard.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="sr-only">
              Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="sr-only">
              Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                required
              />
            </div>
          </div>
          <Button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white"
          >
            Login
          </Button>
        </form>
        <div className="text-center space-y-2">
          <Link
            href="/forgot-password"
            className="text-sm text-gray-400 hover:text-gray-300 underline"
          >
            Forgot password?
          </Link>
          <p className="text-sm text-gray-400">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-pink-500 hover:text-pink-400 underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
