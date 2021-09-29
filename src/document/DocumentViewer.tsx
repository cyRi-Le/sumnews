import React from "react"
import Article from "./Article";
import "./DocumentViewer.css";
import Metric from "./Metric";
import axios from "axios";
import Summary from "./Summary";
export default class DocumentViewer extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        document.title = "Generated summaries";
        this.state = {
            dataLoaded: false,
            data: null,
            loadingFailed: false,
            currentItemIndex: null,
            totalItemCount: null,
            isLoading: false,
            currentItem: undefined
        }
        this.loadData = this.loadData.bind(this);
        this.selectItem = this.selectItem.bind(this);
    }

    componentDidMount() {
        //alert("component mounted");
        this.loadData();
    }

    selectItem(k: number) {
        try {
            const totalItemCount = this.state.totalItemCount;
            const newItem = ((k % totalItemCount) + totalItemCount) % totalItemCount;
            this.setState({currentItemIndex: newItem, currentItem: this.state.data[newItem]});
        } catch (e) {
            // log error
            console.error(e)
        }
    }

    loadData() {
        this.setState({isLoading: true})
        axios.get("/data.json").then((response: any) => {
            // successful loading
            const data = response.data;
            this.setState({
                data, dataLoaded: true, currentItemIndex: 0,
                totalItemCount: Object.keys(data).length, currentItem: data[0]
            });
            console.log(this.state);
        }).catch((error) => {
            // log the error
            console.log("error occurred" + error)
            this.setState({loadingFailed: true})
        }).finally(() => {
            this.setState({isLoading: false})
        })
    }

    render() {
        const currentItem = this.state.currentItem;
        return (
            <div className="document-viewer-container">
                <div className="document-viewer-overlay">
                    {this.state.isLoading && <div className="loader-container"/>}
                </div>
                {this.state.dataLoaded && <>
                    <div className="controls-section">
                        <button onClick={() => {
                            this.selectItem(this.state.currentItemIndex - 1)
                        }}>Previous</button>
                        <button onClick={() => {
                            this.selectItem(this.state.currentItemIndex + 1)
                        }}>Next
                        </button>
                    </div>
                    <div className="article-section content-section">
                        <Article title={currentItem.title} content={currentItem.document}
                                 numberOfTokens={currentItem.num_tokens}/>
                    </div>
                    <div className="summaries-section content-section">
                        <Summary type={"Human reference summary"} content={currentItem.reference_summary}/>
                        <Summary type={"DistillBart base model summary"} content={currentItem.base_model_summary}/>
                        <Metric value={currentItem.rouge1bm} name={"ROUGE 1"}/>
                        <Metric value={currentItem.rouge2bm} name={"ROUGE 2"}/>
                        <Metric value={currentItem.rougeLbm} name={"ROUGE L"}/>
                        <Summary type={"Our fine-tuned DistillBart model summary"} content={currentItem.fine_tuned_model_summary}/>
                        <Metric value={currentItem.rouge1ft} name={"ROUGE 1"}/>
                        <Metric value={currentItem.rouge2ft} name={"ROUGE 2"}/>
                        <Metric value={currentItem.rougeLft} name={"ROUGE L"}/>
                    </div>

                    <div className="metrics-description">*ROUGE higher is better</div>
                </>}
            </div>
        );
    }
}