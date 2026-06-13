export const saveSubmission = (
  data
) => {
  const existing =
    JSON.parse(
      localStorage.getItem(
        "submissions"
      )
    ) || [];

  const newSubmission = {
    id: Date.now(),
    ...data,
    createdAt:
      new Date().toLocaleString(),
  };

  existing.unshift(
    newSubmission
  );

  localStorage.setItem(
    "submissions",
    JSON.stringify(existing)
  );
};

export const getSubmissions =
  () => {
    return (
      JSON.parse(
        localStorage.getItem(
          "submissions"
        )
      ) || []
    );
  };

export const deleteSubmission = (
  id
) => {
  const submissions =
    getSubmissions();

  const updated =
    submissions.filter(
      (item) =>
        item.id !== id
    );

  localStorage.setItem(
    "submissions",
    JSON.stringify(updated)
  );
};
