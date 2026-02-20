
// const API_URL ="http://localhost:5000";

export const sendContactMessage = async (formData) => {
  const response = await fetch("/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};
