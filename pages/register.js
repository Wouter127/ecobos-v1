import AuthCard from "/components/AuthCard";
import Button from "/components/Button";
import GuestLayout from "/components/Layouts/GuestLayout";
import Input from "/components/Input";
import InputError from "/components/InputError";
import Label from "/components/Label";
import Link from "next/link";
import { useAuth } from "/hooks/auth";
import { useState } from "react";

const Register = () => {
  const { register } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/",
  });

  const [voornaam, setVoornaam] = useState("");
  const [achternaam, setAchternaam] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);

  const submitForm = (event) => {
    event.preventDefault();

    register({
      voornaam,
      achternaam,
      email,
      password,
      password_confirmation: passwordConfirmation,
      setErrors,
    });
  };

  return (
    <GuestLayout>
      <AuthCard logo={<Link href="/"></Link>}>
        <form onSubmit={submitForm}>
          {/* voornaam */}
          <div>
            <Label htmlFor="voornaam">Voornaam</Label>

            <Input
              id="name"
              type="text"
              value={voornaam}
              className="mt-1 block w-full"
              onChange={(event) => setVoornaam(event.target.value)}
              required
              autoFocus
            />

            <InputError messages={errors.voornaam} className="mt-2" />
          </div>

          {/* achternaam */}
          <div className="mt-4">
            <Label htmlFor="achternaam">Achternaam</Label>

            <Input
              id="name"
              type="text"
              value={achternaam}
              className="mt-1 block w-full"
              onChange={(event) => setAchternaam(event.target.value)}
              required
              autoFocus
            />

            <InputError messages={errors.achternaam} className="mt-2" />
          </div>

          {/* Email Address */}
          <div className="mt-4">
            <Label htmlFor="email">Email</Label>

            <Input
              id="email"
              type="email"
              value={email}
              className="mt-1 block w-full"
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <InputError messages={errors.email} className="mt-2" />
          </div>

          {/* Password */}
          <div className="mt-4">
            <Label htmlFor="password">Password</Label>

            <Input
              id="password"
              type="password"
              value={password}
              className="mt-1 block w-full"
              onChange={(event) => setPassword(event.target.value)}
              required
              autoComplete="new-password"
            />

            <InputError messages={errors.password} className="mt-2" />
          </div>

          {/* Confirm Password */}
          <div className="mt-4">
            <Label htmlFor="passwordConfirmation">Confirm Password</Label>

            <Input
              id="passwordConfirmation"
              type="password"
              value={passwordConfirmation}
              className="mt-1 block w-full"
              onChange={(event) => setPasswordConfirmation(event.target.value)}
              required
            />

            <InputError
              messages={errors.password_confirmation}
              className="mt-2"
            />
          </div>

          <div className="mt-4 flex items-center justify-end">
            <Link
              href="/login"
              className="text-sm text-gray-600 underline hover:text-gray-900"
            >
              Already registered?
            </Link>

            <Button className="ml-4">Register</Button>
          </div>
        </form>
      </AuthCard>
    </GuestLayout>
  );
};

export default Register;
