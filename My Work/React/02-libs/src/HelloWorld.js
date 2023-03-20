import * as React from "react";
import Button from "@mui/material/Button";
import { Avatar, AvatarGroup } from "@mui/material";

export default function MyApp() {
    return (
      <div>
        <Button variant="contained">Hello World</Button>

        <div style={{ display: 'flex', flexDirection: 'row', margin: 10 }} >
            <AvatarGroup max={4}>
                <Avatar alt="Remy Sharp" sx={{ width: 56, height: 56 }} src="/images/portrait-white-man-isolated_53876-40306.webp" /><br/>
                <Avatar alt="Travis Howard" sx={{ width: 56, height: 56 }} src="/images/avatar_woman.jpeg" /><br/>
                <Avatar alt="Cindy Baker" sx={{ width: 56, height: 56 }} src="/static/images/avatar/3.jpg" /><br/>
            </AvatarGroup>
        </div>
      </div>
    );
}