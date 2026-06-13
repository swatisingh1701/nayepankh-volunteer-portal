export const downloadCSV = (submissions) => {
  const headers = [
    "Name",
    "Email",
    "Phone",
    "City",
    "Skills",
    "Availability",
    "Motivation",
    "Registered On",
  ];

  const rows = submissions.map((item) => [
    item.name || "",
    item.email || "",
    item.phone || "",
    item.city || "",
    item.skills || "",
    item.availability || "",
    item.motivation || "",
    item.createdAt || "",
  ]);

  const csvContent = [
    headers.join(","),
    ...rows.map((row) => row.join(",")),
  ].join("\n");

  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "volunteer-report.csv";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
