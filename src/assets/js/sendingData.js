import axios from 'axios';

const sendingData = ({ data, reset }) => {
    const normalizeData = JSON.stringify(data);
    // console.log(normalizeData);
    axios.post('postData.php', normalizeData, {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => {
        console.log(response);
    });
};

export default sendingData;
