import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'HomeBoard',
    Board: () => <div></div>,
    environmentProps: {
        canvasWidth: 5,
        canvasHeight: 182
    }
});
