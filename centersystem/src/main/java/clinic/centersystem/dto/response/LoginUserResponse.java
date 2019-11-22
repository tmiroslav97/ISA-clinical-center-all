package clinic.centersystem.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;


@Data
@AllArgsConstructor
@Builder
public class LoginUserResponse {
    private Long userID;

    private String email;

    private String token;

    private boolean isNotFirstLogin;

    private String role;

}
