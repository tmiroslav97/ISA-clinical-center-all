package clinic.centersystem.dto.request;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RoomSearchDTO {

    private Long clinicId;

    private String name;

    private Long date;

    private Integer pageCnt;

}
