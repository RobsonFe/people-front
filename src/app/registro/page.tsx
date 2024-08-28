"use client";

import { useEffect, useState } from "react";
import Register from "../components/Register";
import Loader from "../components/common/Loader";

export default function Registro() {
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return <>{loading ? <Loader /> : <Register />}</>;
}
