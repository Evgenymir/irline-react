import React from 'react';
import './Stages-cooperation.scss';
import PopupStages from '../../../components/popup/Popup-stage.jsx';

const stagesCooperationData = {
    stages: {
        byId: {
            stage1: {
                id: 'stage1',
                img: './img/stages/stages1.jpg',
                imgAlt: 'Идея',
                text: '<span>01/</span>идея',
                arrowImg: './img/arrowLIne.jpg',
            },
            stage2: {
                id: 'stage2',
                img: './img/stages/stages2.jpg',
                imgAlt: 'Консультация',
                text: '<span>02/</span>консультация',
                arrowImg: './img/arrowLIne.jpg',
            },
            stage3: {
                id: 'stage3',
                img: './img/stages/stages3.jpg',
                imgAlt: 'Замер',
                text: '<span>03/</span>замер',
                arrowImg: './img/arrowLIne2.jpg',
            },
            stage4: {
                id: 'stage4',
                img: './img/stages/stages4.jpg',
                imgAlt: 'Договор',
                text: '<span>04/</span>договор',
                arrowImg: './img/arrowLIne3.jpg',
            },
            stage5: {
                id: 'stage5',
                img: './img/stages/stages5.jpg',
                imgAlt: 'Проектирование',
                text: '<span>05/</span>проектирование',
                arrowImg: './img/arrowLIne4.jpg',
            },
            stage6: {
                id: 'stage6',
                img: './img/stages/stages6.jpg',
                imgAlt: 'Комплектация',
                text: '<span>06/</span>комплектация',
                arrowImg: './img/arrowLIne5.jpg',
            },
            stage7: {
                id: 'stage7',
                img: './img/stages/stages7.jpg',
                imgAlt: 'Монтаж',
                text: '<span>07/</span>монтаж',
                arrowImg: './img/arrowLIne5.jpg',
            },
            stage8: {
                id: 'stage8',
                img: './img/stages/stages8.jpg',
                imgAlt: 'Гарантия',
                text: '<span>08/</span>гарантия',
                arrowImg: '',
            },
        },
        allIds: ['stage1', 'stage2', 'stage3', 'stage4', 'stage5', 'stage6', 'stage7', 'stage8'],
    },
    contents: {
        byId: {
            content1: {
                stageId: 'stage1',
                img: './img/stages/popupImg.jpg',
                title: '01/Идея',
                content: 'Данный текст будет содержать описание. Данный текст будет содержать описание. Данный текст будет содержать описание. Данный текст будет содержать описание. Данный текст будет содержать описание.',
            },
            content2: {
                stageId: 'stage2',
                img: './img/stages/popupImg.jpg',
                title: '02/Консультация',
                content: 'Данный текст будет содержать описание. Данный текст будет содержать описание. Данный текст будет содержать описание. Данный текст будет содержать описание. Данный текст будет содержать описание.',
            },
            content3: {
                stageId: 'stage3',
                img: './img/stages/popupImg.jpg',
                title: '03/Замер',
                content: 'Данный текст будет содержать описание. Данный текст будет содержать описание. Данный текст будет содержать описание. Данный текст будет содержать описание. Данный текст будет содержать описание.',
            },
            content4: {
                stageId: 'stage4',
                img: './img/stages/popupImg.jpg',
                title: '04/Договор',
                content: 'Данный текст будет содержать описание. Данный текст будет содержать описание. Данный текст будет содержать описание. Данный текст будет содержать описание. Данный текст будет содержать описание.',
            },
            content5: {
                stageId: 'stage5',
                img: './img/stages/popupImg.jpg',
                title: '05/Проектирование',
                content: 'Данный текст будет содержать описание. Данный текст будет содержать описание. Данный текст будет содержать описание. Данный текст будет содержать описание. Данный текст будет содержать описание.',
            },
            content6: {
                stageId: 'stage6',
                img: './img/stages/popupImg.jpg',
                title: '06/Комплектация',
                content: 'Данный текст будет содержать описание. Данный текст будет содержать описание. Данный текст будет содержать описание. Данный текст будет содержать описание. Данный текст будет содержать описание.',
            },
            content7: {
                stageId: 'stage7',
                img: './img/stages/popupImg.jpg',
                title: '07/Монтаж',
                content: 'Данный текст будет содержать описание. Данный текст будет содержать описание. Данный текст будет содержать описание. Данный текст будет содержать описание. Данный текст будет содержать описание.',
            },
            content8: {
                stageId: 'stage8',
                img: './img/stages/popupImg.jpg',
                title: '08/Гарантия',
                content: 'Данный текст будет содержать описание. Данный текст будет содержать описание. Данный текст будет содержать описание. Данный текст будет содержать описание. Данный текст будет содержать описание.',
            },
        },
        allIds: ['content1', 'content2', 'content3', 'content4', 'content5', 'content6', 'content7', 'content8'],
    },
};

class StagesCooperation extends React.Component {
    constructor(props) {
        super(props);
        const { stages, contents } = stagesCooperationData;
        this.state = {
            items: stages.allIds.map((item) => stages.byId[item]),
            contents: contents.allIds.map((item) => contents.byId[item]),
            popupContent: {},
            popupUiState: {
                isActive: null,
            },
        };
    }

    handleClickLinkForPopup = (id) => (e) => {
        e.preventDefault();
        const { contents } = this.state;
        const currentContent = contents.find((item) => item.stageId === id);
        this.handleSetData(currentContent);
        this.handleOpenPopup();
    };

    handleSetData({ img, title, content }) {
        this.setState({
            popupContent: { img, title, content },
        });
    }

    handleOpenPopup() {
        const { popupUiState: { isActive } } = this.state;
        this.setState({ popupUiState: { isActive: !isActive } });
    }

    renderItems() {
        const { items } = this.state;

        if (items.length === 0) {
            return null;
        }

        return (
            <div className="stages-cooperation__block">
                { items.map(({
                    id, img, imgAlt, text, arrowImg,
                }) => (
                    <div className="stages-cooperation__block-item" key={id}>
                        <span className="stages-cooperation__block-item-arrow" style={{ backgroundImage: `url(${arrowImg})` }} />
                        <div className="stages-cooperation__block-item-img">
                            <a href={`#${id}`} onClick={this.handleClickLinkForPopup(id)}>
                                <img src={img} alt={imgAlt} />
                                <p dangerouslySetInnerHTML={{ __html: text }} />
                            </a>
                        </div>
                    </div>
                )) }
            </div>
        );
    }

    renderPopupStage() {
        const { popupContent, popupUiState: { isActive } } = this.state;

        if (!isActive) {
            return null;
        }

        return (
            <PopupStages
                content={popupContent.content}
                img={popupContent.img}
                title={popupContent.title}
                closePopup={this.handleOpenPopup.bind(this)}
            />
        );
    }

    render() {
        return (
            <section className="stages-cooperation">
                <div className="container">
                    <div className="stages-cooperation__title title">
                        <h3>Этапы сотрудничества</h3>
                    </div>
                    { this.renderItems() }
                </div>
                { this.renderPopupStage() }
            </section>
        );
    }
}

export default StagesCooperation;
