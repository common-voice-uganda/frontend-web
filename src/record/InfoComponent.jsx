import {Button, Typography} from "@material-ui/core";
import React from "react";

export default ({loading, recording, uploading, click, onRecordingDone, statement, retryLoading, loadingError}) => {
    return (
        <div>
            {loading ?
                "Loading..." : loadingError ?
                    (
                        <div>
                            <Typography className="is-size-6">Failed to load sentence</Typography>
                            <Button onClick={retryLoading} variant="outlined">Retry</Button>
                        </div>
                    ) : <Typography className="is-size-5">{statement.text}</Typography>}
        </div>
    )
}
