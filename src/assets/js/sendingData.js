const sendingData = ({ data }) => {
    const normalizeData = JSON.stringify(data);
    const result = {
        data: normalizeData,
        status: 200,
    };

    return result;
};

export default sendingData;
