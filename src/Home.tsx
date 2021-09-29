import React from "react";
import "./Home.css";
import ButtonLink from "./ButtonLink";
export default class Home extends React.Component<any, any>{
    constructor(props:any) {
        super(props);
        document.title = "News Summarization with Transformers";
    }
    render() {
        return (
            <div className="home-container">

                <div id="presentation-wrapper" className="flex-wrapper flex-wrapper-vertical content-padding-level5">
                    <div className="section-wrapper">
                        <div className="title-wrapper">
                            <h4 className="content-padding-left-level4">Project</h4>
                        </div>
                        <div className="section-content">
                            <p>
                                Summarization has become one of the most important task in Natural Language Processing.
                                The state-of-the art Deep Learning models
                                achieve outstanding quality summarization. All of the recent best performing models use
                                the Transformer architecture introduced by Vaswani et al (2017).
                                In this project, we use the DistilBart model, which is the distilled model (over
                                CNN/Daily mail dataset) of the original Bart(Mike Lewis et al).
                                The final goal is to achieve some "good" metrics on our custom dataset made up of EPFL's
                                news over the five last years.
                                Recently, large-scale pre-trained language models, such as BERT (Devlin et al., 2018)
                                and GPT (Radford et al., 2018), have been used effectively as the base models for
                                building task-specific natural language understanding (NLU) models via fine-tuning (such
                                as text classification).
                                However those pre-trained models are expensive to serve at runtime (e.g. BERT contains
                                24 transformer layers with 344 million parameters, and GPT-2 contains 48 transformer
                                layers with 1.5 billion parameters), which make them impossible to deploy on devices
                                such as mobile phones
                                and medium size websites.
                                That's how it comes to distillation and fine-tuning pre-trained model.


                            </p>
                        </div>
                    </div>
                    <div className="section-wrapper">
                        <div className="title-wrapper">
                            <h4 className="content-padding-left-level4">What is knowledge distillation ?</h4>
                        </div>
                        <div className="content-wrapper">
                            <p>Knowledge distillation is a process of distilling or transferring the knowledge from a
                                (set of) large, cumbersome model(s) to a lighter, easier-to-deploy single model, without
                                significant loss in performance (Hinton et al., 2015).
                                This small model will be able to produce comparable results, and in some cases, it can
                                even be made capable of replicating the results of the cumbersome model.
                                We consider the cumbersome model as Teacher Network and our new small model as Student
                                Network.</p>
                        </div>
                    </div>
                    <div className="section-wrapper">
                        <div className="title-wrapper">
                            <h4 className="content-padding-left-level4">Model size and metrics </h4>
                        </div>
                        <div className="content-wrapper">
                            <p>
                                The model we use is from the distillation from of the original BART over the CNN/Daily
                                mail summarization dataset.
                                It is provided by the HuggingFace API via the <code>transformers</code> package.
                            </p>
                            <table>
                                <caption>Table 1.1 Model parameters</caption>
                                <tr>
                                    <th>Model name</th>
                                    <th> # of parameters</th>
                                    <th>Rouge 2</th>
                                    <th>Rouge L</th>
                                    <th>Speed up</th>
                                </tr>
                                <tr>
                                    <td>bart-large-cnn <br/>(baseline)</td>
                                    <td>406 M</td>
                                    <td>21.06</td>
                                    <td>30.63</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>distilbart-12-6-cnn</td>
                                    <td>306 M</td>
                                    <td>21.26</td>
                                    <td>30.59</td>
                                    <td>1.24</td>
                                </tr>

                            </table>

                        </div>
                    </div>
                    <div id="dataset-wrapper" className="section-wrapper">
                        <div className="title-wrapper">
                            <h4 className="content-padding-left-level4">News Corpus</h4>
                        </div>
                        <div className="content-wrapper">
                            <p> The dataset is made up of 1533 newspapers and their gold summaries i.e produced by human
                                expert. We have split the dataset into two sets, one is the training set (80%) and the
                                other is the test set (20%).
                                Here is a link below to download the dataset (CSV format).</p>

                                <ButtonLink href="https://s3.eu-west-3.amazonaws.com/summarization.data.io/news-large-1.zip"
                                   className="button-link border-radius-wrapper" data-type="download">Download the
                                    dataset (2.7 MO)</ButtonLink>


                        </div>

                    </div>
                    <div className="section-wrapper">
                        <div className="title-wrapper"><h4 className="content-padding-left-level4">Getting started</h4>
                        </div>
                        <div className="content-wrapper">
                            <p>Download the model last checkpoint from the link below. It can be loaded from native
                                PyTorch or via the
                                <code>transformers</code> library</p>

                                <ButtonLink href="https://s3.eu-west-3.amazonaws.com/summarization.data.io/model-2-en.zip"
                                   className="button-link border-radius-wrapper" data-type="download">Download the model
                                    (1.2 GB)</ButtonLink>
                            <p>Download the python notebook to load the model. The notebook provided to run within a GPU
                                environment (Kaggle, Colab, etc.)</p>
                                <ButtonLink href="" className="button-link border-radius-wrapper" data-type="download">Download
                                    the notebook</ButtonLink>
                        </div>
                    </div>
                    <div className="section-wrapper">
                        <div className="title-wrapper">
                            <h4 className="content-padding-left-level4">Preliminary results</h4>
                        </div>
                        <div className="content-wrapper">
                            <p>The model is fine-tuned in Kaggle's environment (1GPU P100-16GB) with a batch size of 2
                                over 20 epochs. We used Adam optimizer with
                                l<sub>r</sub> = 5x10<sup>-5</sup> and settled a linear 6% warmup steps. Additionally,
                                the news were cleaned from any HTML tag since the original CNN dataset is clean text.
                            </p>

                            <table>
                                <caption>Table 1.2 Metrics of the fine-tuned model</caption>
                                <tr>
                                    <th>Metrics</th>
                                    <th>distilbart-12-6-cnn <br/>(base)</th>
                                    <th>distilbart-12-6-cnn <br/> (fine-tuned)</th>
                                </tr>
                                <tr>

                                    <td>Rouge 1</td>
                                    <td>35.69</td>
                                    <td>44.90</td>
                                </tr>
                                <tr>
                                    <td>Rouge 2</td>
                                    <td>10.80</td>
                                    <td>16.01</td>
                                </tr>
                                <tr>
                                    <td>Rouge L</td>
                                    <td>23.71</td>
                                    <td>32.65</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}