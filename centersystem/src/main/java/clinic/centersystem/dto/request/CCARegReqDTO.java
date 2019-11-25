package clinic.centersystem.dto.request;

import lombok.*;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CCARegReqDTO {
    private Long id;

    private String firstName;

    private String lastName;

    private String email;

    private String password;
}
