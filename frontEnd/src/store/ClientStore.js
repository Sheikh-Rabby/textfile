import {create} from "zustand";
import axios from "axios";

const ClientStore = create((set,get)=>({
    totalData: [],
    totalDataRequest: async (req, res) => {
        try {
            let response = await axios.get("http://localhost:3030/api/totalAmount");

            if (response.data.status === "success") {
                set({totalData: response.data});

            }
        } catch (err) {
            console.log(err.message);
        }
    },


    UForm: {
        email: "",
        password: "",
    },
    UFromOnChange: (name, value) => {
        set((state) => ({
            UForm: { ...state.UForm, [name]: value }
        }));
    },

    Udata: [],
    UdataRequest: async (req, res) => {
        const { email, password } = get().UForm;
        let reqbody = { email, password };

        try {
            let response = await axios.post("http://localhost:3030/api/userLogin", reqbody);


            if (response.data.status === "success") {
                localStorage.setItem("userId", response.data.data._id);
                localStorage.setItem("token", response.data.token);

                set({ Udata: response.data });
                return true;
            } else {
                console.log("Error: Missing _id or token in response data");
                return false;
            }

        } catch (err) {
            console.error("API Error:", err.response || err.message || err);
            return false;
        }
    },

    data: [],
    UserDetailsRequest: async () => {
        const userId = localStorage.getItem("userId");
        console.log("UserId from LocalStorage:", userId);
        if (userId) {
            try {
                let response = await axios.get(`http://localhost:3030/api/userTotalDetails/${userId}`);
                console.log("API Response:", response);

                if (response.data.status === "success") {
                    set({ data: response.data });
                } else {
                    console.log("API Response status was not 'success'.");
                }
            } catch (e) {
                console.log("Error fetching user details:", e.message);
            }
        } else {
            console.log("No user logged in.");
        }
    },

    userData:[],
    userDataRequestById:async () => {
        const userId = localStorage.getItem("userId");
      let response = await axios.get(`http://localhost:3030/api/userById/${userId}`);
      if (response.data.status === "success") {
          set({ userData: response.data });
      }
    }





}));
export default ClientStore;
