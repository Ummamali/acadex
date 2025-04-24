import { postURL } from "./backendConfig";

export async function postStudent(data) {
  const formData = new FormData();

  formData.append("studentObj", JSON.stringify(data.studentObj));
  formData.append("studentImg", data.studentImg);

  const res = await fetch(postURL("students"), {
    method: "POST",
    body: formData,
  });
  const resObj = await res.json();

  return resObj;
}
