import React from 'react';
import './Stages-cooperation.scss';
import { connect } from 'react-redux';
import PopupStages from '../../../components/popup/Popup-stage.jsx';
import { stagesOfCooperationOpenPopup } from '../../../actions';

const normalizeData = (data) => {
    if (data === undefined) {
        return {};
    }

    const {
        stages, contents, popupContent, popupUiState,
    } = data;
    return {
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

export default connect(mapToStateProps)(StagesCooperation);
