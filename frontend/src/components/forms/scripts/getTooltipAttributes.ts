import getTooltip from "./getTooltip";

const getTooltipAttributes = (inputType: Exclude<Form.InputTypes, 'wantBeAdmin'>) => {
  return {
    'data-toggle': 'tooltip',
    'data-placement': 'top',
    'data-trigger': 'focus',
    'data-original-title': getTooltip(inputType)
  }
}

export default getTooltipAttributes;
