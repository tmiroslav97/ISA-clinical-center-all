package clinic.centersystem.dto.request;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ClinicRequestDTO {
    private Long id;
    private String name;
    private String description;
    private String address;
    private Double sumRating;
    private Double cntRating;
}
