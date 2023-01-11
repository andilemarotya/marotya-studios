import React from "react";
import { Dialog, DialogTitle , DialogContent} from "@material-ui/core";


export default function Enquirepop(props){

    const { title , children, openPopup, setOpenPopop} = props;

    return (
        <Dialog open={openPopup}>
            <DialogTitle>
                <div>Title goes here.</div>
            </DialogTitle>
            <DialogContent>
                <div>content goes here</div>0
            </DialogContent>
        </Dialog>

    );
}