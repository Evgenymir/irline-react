import axios from 'axios';

const sendingData = ({ data, reset }) => {
    const normalizeData = {
        name: data.name,
        phone: data.phone,
    };
    // console.log(normalizeData);
    axios.post('mail.php', normalizeData).then((response) => {
        console.log(response);
    });
};

export default sendingData;
