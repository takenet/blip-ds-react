export interface Props {
  functionTitle?: string;
}

export interface SubmitType {
  functionTitle?: string;
  stateFeedback?: StateFeedback;
  stateForm?: StateForm;
  description?: string;
  screenshot?: File[];
}

export type StateFeedback = 'default' | 'like' | 'dislike' | 'success';

export type StateForm = 'closed' | 'suggestion' | 'problem' | 'rate';
