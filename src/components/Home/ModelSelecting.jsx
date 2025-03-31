import React, { useState } from 'react'
import { models } from '../../api/models/modelsList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function ModelSelecting({ model, setModel, theme }) {
    const selectedModel = models.find(a => a.name === model)
    const [selecting, setSelecting] = useState(false)

    const handleToggleSelecting = () => {
        setSelecting(!selecting)
    }

    function handleSelectModel(model) {
        if (model.name === selectedModel.name) {
            handleToggleSelecting()
            return
        }
        setModel(model.name)
        setSelecting(false)
    }

    function Model({ model }) {
        return (
            <div style={{ '--theme-color': theme.color }} onClick={() => handleSelectModel(model)} className={`model${model.name === selectedModel.name && selecting ? ' primary' : ''}`}>
                <span>{<FontAwesomeIcon icon={model.icon} />} {model.name}</span>
                {model.name === selectedModel.name ? <button><FontAwesomeIcon icon={faChevronDown} /></button> : null}
            </div>
        )
    }

  return (
    <div className="select_model">
        <Model model={selectedModel} key={model} />
        {selecting ? <div className="list">
            {models.filter(model => model.name !== selectedModel.name && !model.disabled).map((model, index) => (
                <Model model={model} key={index} />
            ))}
        </div> : null}
    </div>
  )
}
