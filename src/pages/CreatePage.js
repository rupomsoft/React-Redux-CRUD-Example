import React from 'react';
import App from "../App";
import AppNavBar from "../component/AppNavBar";
import CreateUpdateForm from "../component/CreateUpdateForm";

const CreatePage = () => {
    return (
        <div>
            <AppNavBar/>
            <CreateUpdateForm/>
        </div>
    );
};

export default CreatePage;