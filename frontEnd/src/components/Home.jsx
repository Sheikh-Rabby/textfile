import React, { useEffect } from 'react';
import ClientStore from "../store/ClientStore.js";
import animation from '../animation/greenDot.json';
import redanimation from '../animation/redDot.json';
import Lottie from 'lottie-react';
import {useNavigate} from "react-router-dom";


const Home = () => {
    const { totalData, totalDataRequest, data, UserDetailsRequest, userData, userDataRequestById } = ClientStore();
    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    {
        if (!token) {
            navigate("/login");
        }
    }

    console.log("Total Data:", totalData); // Check if totalData is correct
    console.log("User Data:", data);
    console.log(userData); // Check if userData is correct

    useEffect(() => {
        (async () => {
            await totalDataRequest();
            await UserDetailsRequest();
            await userDataRequestById();
        })();
    }, []);

    const isThankYouIncluded = data?.data?.length > 0 && data.data[0].waringMessage.includes('ধন্যবাদ');

    return (
        <div className="container">
            <h2 className="mt-2">মোট হিসাব-নিকাশ</h2>
            <hr className="col-12" />
            <div className="row">
                <div className="card mt-1 height col-sm-12 col-md-6 col-lg-3 text-center shadow">
                    <h5 className="mt-3">মোট জমা টাকা</h5>
                    <hr className="col-12 hr" />
                    {totalData?.data?.totalPaidAmount ? (
                        <h1> ৳ {totalData.data.totalPaidAmount}</h1>
                    ) : (
                        <p>loading....</p>
                    )}
                </div>
                <div className="card mt-1 height col-sm-12 col-md-6 col-lg-3 text-center shadow">
                    <h5 className="mt-3">মোট মিল</h5>
                    <hr className="col-12 hr" />
                    {totalData?.data?.totalMeal ? (
                        <h1>{totalData.data.totalMeal}</h1>
                    ) : (
                        <p>loading....</p>
                    )}
                </div>
                <div className="card mt-1 height col-sm-12 col-md-6 col-lg-3 text-center shadow">
                    <h5 className="mt-3">মিল রেট</h5>
                    <hr className="col-12 hr" />
                    {totalData?.data?.mealRate ? (
                        <h1> ৳ {totalData.data.mealRate}</h1>
                    ) : (
                        <p>loading....</p>
                    )}
                </div>
                <div className="card mt-1 height col-sm-12 col-md-6 col-lg-3 text-center shadow">
                    <h5 className="mt-3">মোট বাজার খরচ</h5>
                    <hr className="col-12 hr" />
                    {totalData?.data?.totalBazarAmount ? (
                        <h1> ৳ {totalData.data.totalBazarAmount}</h1>
                    ) : (
                        <p>loading....</p>
                    )}
                </div>
                <div className="card mt-1 height col-sm-12 col-md-6 col-lg-3 text-center shadow mb-5">
                    <h5 className="mt-3">মোট বাঁচানো টাকা</h5>
                    <hr className="col-12 hr" />
                    {totalData?.data?.totalRefoundCost ? (
                        <h1> ৳ {totalData.data.totalRefoundCost}</h1>
                    ) : (
                        <p>loading....</p>
                    )}
                </div>
            </div>

            <h2 className="mt-2">তোমার হিসাব-নিকাশ</h2>
            <hr className="col-12" />
            <div className="row">
                <div className="card mt-1 height col-sm-12 col-md-6 col-lg-3 text-center shadow">
                    <h5 className="mt-3">মোট জমা টাকা</h5>
                    <hr className="col-12 hr" />
                    {Array.isArray(data?.data) && data.data.map((item, index) => (
                        <h1 key={index}> ৳ {item.totalPaidAmount}</h1>
                    ))}
                </div>
                <div className="card mt-1 height col-sm-12 col-md-6 col-lg-3 text-center shadow">
                    <h5 className="mt-3">মোট মিল</h5>
                    <hr className="col-12 hr" />
                    {data?.data?.length > 0 ? (
                        <h1> {data.data[0].totalMeal}</h1>
                    ) : (
                        <p>loading....</p>
                    )}
                </div>
                <div className="card mt-1 height col-sm-12 col-md-6 col-lg-3 text-center shadow">
                    <h5 className="mt-3">
                        {Array.isArray(data?.data) && data.data.length > 0 && (data.data[0].giveTKMessage.includes("টাকা পাবে") || data.data[0].giveTKMessage.includes("টাকা দিবে"))
                            ? (data.data[0].giveTKMessage.includes("টাকা পাবে") ?
                                "তুমি টাকা পাবে" : "তুমি টাকা দিবে") : ""}
                    </h5>
                    <hr className="col-12 hr" />
                    {data?.data?.length > 0 ? (
                        <h1> {data.data[0].giveTk} ৳</h1>
                    ) : (
                        <p>loading....</p>
                    )}
                </div>

                <div className="card mt-1 height col-sm-12 col-md-6 col-lg-3 text-center shadow">
                    <h5 className="mt-3">মোট মিলের খরচ </h5>
                    <hr className="col-12 hr" />
                    {data?.data?.length > 0 ? (
                        <h1> ৳ {data.data[0].totalMealCost}</h1>
                    ) : (
                        <p>loading....</p>
                    )}
                </div>
                <div className="card mt-2 mar  animationbox  col-sm-12 col-md-6 col-lg-3 text-center shadow mb-5  ">
                      <div className="d-flex justify-content-start align-items-center">
                          <Lottie animationData={isThankYouIncluded? animation:redanimation } loop={true} autoplay={true} style={{ height: 100, width: 100 }} />
                          <div className="me-5">  {data?.data?.length > 0 ? (
                              <h3>  {data.data[0].waringMessage}</h3>
                          ) : (
                              <p>loading....</p>
                          )}</div>
                      </div>


                </div>
            </div>

            <div className="row">
                <h2 className="mt-1">মিল টেবিল</h2>
                <hr className="hr ms-2" />
                <table className="table table-striped table-bordered table-hover table1 col-12 mb-5">
                    <thead>
                    <tr>
                        <th className="bg-success">তারিখ</th>
                        <th className="bg-success">মিল গ্রহণ</th>
                        <th className="bg-success">মিল কাউন্ট</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Array.isArray(userData?.data?.meal_history) && userData.data.meal_history.map((item, i) => (
                        <tr key={i}>
                            <td>{new Date(item.meal_date).toLocaleDateString()}</td>
                            <td>{item.meal_status}</td>
                            <td>{item.meal_count}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;
