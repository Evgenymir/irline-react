import React from 'react';
import PropTypes from 'prop-types';
import './Stages-cooperation.scss';
import { connect } from 'react-redux';
import PopupStages from '../../../components/popup/Popup-stage.jsx';
import { stagesOfCooperationOpenPopup } from '../../../actions';

const normalizeData = (data) => {
    if (data === undefined) {
        return {};
    }

    const {
        title, stages, contents, popupContent, popupUiState,
    } = data;
    return {
        title,
        items: stages.allIds.map((item) => stages.byId[item]),
        contents: contents.allIds.map((item) => contents.byId[item]),
        popupContent,
        isActivePopup: popupUiState.isActive,
    };
};

const mapToStateProps = ({ initState }) => {
    const { stagesOfCooperation } = initState;
    return normalizeData(stagesOfCooperation);
};

class StagesCooperation extends React.Component {
    handleClickLinkForPopup = (id) => (e) => {
        e.preventDefault();
        const { contents, dispatch } = this.props;
        const currentContent = contents.find((item) => item.stageId === id);
        dispatch(stagesOfCooperationOpenPopup(currentContent));
    };

    renderItems() {
        const { items } = this.props;

        if (items === undefined) {
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
        const { popupContent, isActivePopup } = this.props;

        if (!isActivePopup) {
            return null;
        }

        return (
            <PopupStages
                content={popupContent.content}
                img={popupContent.img}
                title={popupContent.title}
            />
        );
    }

    render() {
        const { title } = this.props;
        return (
            <section className="stages-cooperation">
                <div className="container">
                    <div className="stages-cooperation__title title">
                        <h3>{title}</h3>
                    </div>
                    { this.renderItems() }
                </div>
                { this.renderPopupStage() }
            </section>
        );
    }
}

StagesCooperation.defaultProps = {
    title: 'Нет заголовка',
    items: [{
        id: 'test',
        img: './img/stages/stages1.jpg',
        imgAlt: 'example',
        text: 'example text',
        arrowImg: './img/arrowLIne.jpg',
    }],
    contents: [],
    popupContent: {},
    isActivePopup: null,
};

StagesCooperation.propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        img: PropTypes.string,
        imgAlt: PropTypes.string,
        text: PropTypes.string,
        arrowImg: PropTypes.string,
    })),
    contents: PropTypes.arrayOf(PropTypes.object),
    popupContent: PropTypes.objectOf(PropTypes.string),
    isActivePopup: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
};

export default connect(mapToStateProps)(StagesCooperation);
