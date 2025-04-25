import { deleteURL, postURL } from "./backendConfig";

export async function postStudent(data) {
  const formData = new FormData();

  formData.append("studentObj", JSON.stringify(data.studentObj));
  formData.append("studentImg", data.studentImg);

  const res = await fetch(postURL("students"), {
    method: "POST",
    body: formData,
  });

  if (res.status === 201) {
    return res;
  } else {
    throw new Error("Backend didn't return a 201");
  }
}

export async function requestDeleteStudent(studentId) {
  const res = await fetch(deleteURL("students", studentId), {
    method: "DELETE",
  });

  return res;
}
