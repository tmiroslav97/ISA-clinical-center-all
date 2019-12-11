package clinic.centersystem.dto.request;

import lombok.*;

@Builder
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class DoctorRequestDTO {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
}
