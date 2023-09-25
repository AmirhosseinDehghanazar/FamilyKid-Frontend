import axios from "axios";

/* using factory to make 3 register POST method
for (teacher, supervisor and consultant) */
class HTTP_register {
  constructor(endpoint) {
    this.endpoint = `https://3c55-109-230-65-89.ngrok-free.app/accounts/api/register-${endpoint}/`;
  }

  register(values) {
    console.log(`endpoint:${this.endpoint}, body:${values}`);
    return axios.post(this.endpoint, values);
  }
}

export const teacher_service = new HTTP_register("teacher");
export const supervisor_service = new HTTP_register("supervisor");
export const consultant_service = new HTTP_register("consultant");
