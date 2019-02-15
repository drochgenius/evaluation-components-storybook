import React, { Component } from 'react';
import './Graph.css';
import '@hmh/plot-graph';

export class Graph extends Component {
    render() {
        return (
            <div className="component-wrapper">
                <plot-graph>
                    <coordinate-system slot="graph-axis">
                        <div
                            slot="axis"
                            color="red"
                            direction="x"
                            min="-5"
                            max="5"
                            axis-visibility="visible"
                            scale-visibility="visible"
                            other-axes-crossing-point="0"
                        >
                            Time
                        </div>
                        <div
                            slot="axis"
                            color="green"
                            direction="y"
                            min="-1"
                            max="1"
                            axis-visibility="visible"
                            scale-visibility="visible"
                            other-axes-crossing-point="0"
                        >
                            Frequency
                        </div>
                    </coordinate-system>

                    <div
                        slot="equation-items"
                        class="equation-item"
                        color="red"
                        equation-xmin="0"
                        equation-xmax="360"
                        equation-ymin="-1"
                        equation-ymax="1"
                        step=".1"
                    >
                        Math.sin(x)
                    </div>
                    <div
                        slot="equation-items"
                        class="equation-item"
                        color="blue"
                        equation-xmin="0"
                        equation-xmax="360"
                        equation-ymin="-1"
                        equation-ymax="1"
                        step=".1"
                    >
                        Math.cos(x)
                    </div>
                </plot-graph>
            </div>
        );
    }
}

