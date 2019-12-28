const reducer = 'medicineDiagnoseReducer';

export const codebookDataSelector = state => state[reducer].codebook;
export const isFetchCodebookSelector = state => state[reducer].isFetchCodebook;