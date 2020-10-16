export const required = (value) => {
    if (value) {
        return undefined;
    }

    return 'Поле не может быть пустым';
};

export const phoneLength = (value) => {
    if (value && value.length === 10) {
        return undefined;
    }

    return 'Номер телефона должен быть полным';
};

export const email = (value) => {
    const regExEmail = /.+@.+\..+/i;
    if (value && regExEmail.test(value)) {
        return undefined;
    }

    return 'Некорректный email адрес';
};
